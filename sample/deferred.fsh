#version 330 compatibility



/*
 _______ _________ _______  _______  _ 
(  ____ \\__   __/(  ___  )(  ____ )( )
| (    \/   ) (   | (   ) || (    )|| |
| (_____    | |   | |   | || (____)|| |
(_____  )   | |   | |   | ||  _____)| |
      ) |   | |   | |   | || (      (_)
/\____) |   | |   | (___) || )       _ 
\_______)   )_(   (_______)|/       (_)

Do not modify this code until you have read the LICENSE.txt contained in the root directory of this shaderpack!

*/


const int shadowMapResolution = 4096; // Higher value impacts performance costs, but can get better shadow, and increase path tracing distance. Please increase the shadow distance at the same time. 4096 - 80 blocks path tracing. 8192 - 125 blocks path tracing. 16384 - 200 blocks path tracing, requires at least 6GB VRAM. 34768 - 330 blocks of path tracing, requires at least 20GB VRAM. [4096 8192 16384 32768]
const int RAY_TRACING_RESOLUTION = shadowMapResolution >> 1;
const float RAY_TRACING_DIAMETER_TEMP = floor(pow(RAY_TRACING_RESOLUTION, 2.0 / 3.0));
const float RAY_TRACING_DIAMETER = RAY_TRACING_DIAMETER_TEMP - mod(RAY_TRACING_DIAMETER_TEMP, 2.0) - 1.0;

in vec4 texcoord;
flat in vec3 colorSkyUp;


#include "/lib/Settings.inc"
#include "/lib/Uniforms.inc"
#include "/lib/Common.inc"
#include "/lib/Materials.inc"
#include "/lib/GBufferData.inc"


 vec2 s(vec3 v)
 {
   ivec2 m=ivec2(viewWidth,viewHeight);
   v=v+vec3(.5*altRTDiameter);
   v=clamp(v,vec3(0.),vec3(altRTDiameter));
   vec3 i=floor(v.xzy+1e-05);
   i.x+=i.z*altRTDiameter;
   vec2 n;
   n.x=mod(i.x,m.x);
   n.y=i.y+floor(i.x/m.x)*altRTDiameter;
   n+=.5;
   n/=m;
   return n;
 }
 vec2 d(vec3 v)
 {
   v=clamp(v,vec3(0.),vec3(RAY_TRACING_DIAMETER));
   v.x+=v.y*RAY_TRACING_DIAMETER;
   v.y=v.z+floor(v.x/RAY_TRACING_RESOLUTION)*RAY_TRACING_DIAMETER;
   v.x=mod(v.x,RAY_TRACING_RESOLUTION);
   return v.xy;
 }
 vec3 n(vec3 v)
 {
   vec4 i=vec4(v,1.);
   i=shadowModelView*i;
   i=shadowProjection*i;
   i/=i.w;
   float x=length(i.xy),y=1.f-SHADOW_MAP_BIAS+x*SHADOW_MAP_BIAS;
   i.xy*=.95f/y;
   i.z=mix(i.z,.5,.8);
   i=i*.5f+.5f;
   i.xy*=.5;
   i.xy+=.5;
   return i.xyz;
 }
 struct rXuEJcsNQI{vec3 QbpObHBdUl;vec3 ZRrfSsHfvT;vec3 fgCeZiNBHZ;vec3 ZKdJsVHIyK;vec3 frnQIYJjVJ;};
 rXuEJcsNQI r(Ray v)
 {
   rXuEJcsNQI i;
   i.QbpObHBdUl=floor(v.origin);
   i.ZRrfSsHfvT=abs(vec3(length(v.direction))/(v.direction+1e-07));
   i.fgCeZiNBHZ=sign(v.direction);
   i.ZKdJsVHIyK=(i.fgCeZiNBHZ*(i.QbpObHBdUl-v.origin)+i.fgCeZiNBHZ*.5+.5)*i.ZRrfSsHfvT;
   i.frnQIYJjVJ=vec3(0.);
   return i;
 }
 void i(inout rXuEJcsNQI v)
 {
   v.frnQIYJjVJ=step(v.ZKdJsVHIyK.xyz,vec3(min(min(v.ZKdJsVHIyK.x,v.ZKdJsVHIyK.y),v.ZKdJsVHIyK.z)));
   v.ZKdJsVHIyK+=v.frnQIYJjVJ*v.ZRrfSsHfvT,v.QbpObHBdUl+=v.frnQIYJjVJ*v.fgCeZiNBHZ;
 }
 vec3 i(vec3 v,vec3 z,vec3 y)
 {
   if(wetness>.99)
     return vec3(0.);
   vec3 i=v+1.-FractedCameraPosition,n=n(i);
   float depth=pow(length(v),.7)*1e-5+4e-5;
   n.z-=depth;
   float shadowStrength=shadow2DLod(shadowtex0,vec3(n.xy,n.z),0).x;
   vec3 r=vec3(shadowStrength);
   r*=saturate(dot(z,y));
   r=TintUnderwaterDepth(r);
   if(shadowStrength<.1)
     return r*(1.-wetness);
   #ifdef GI_SUNLIGHT_STAINED_GLASS_TINT
   float w=shadow2DLod(shadowtex0,vec3(n.xy-vec2(.5,0.),n.z),0).x;
   if(w<.9)
     {
       vec3 s=texture2DLod(shadowcolor,vec2(n.xy-vec2(.5,0.)),3).xyz;
       s*=s;
       r=mix(r*s,r,w);
     }
   #endif
   float waterShadow=shadow2DLod(shadowtex0,vec3(n.xy-vec2(0.,.5),n.z),3).x;
   if(waterShadow<.9)
     {
       float waterDepth=texture2DLod(shadowcolor1,vec2(n.xy-vec2(0.,.5)),3).x*256.0-(i.y+cameraPosition.y);
       r/=sqrt(waterDepth)+1.;
     }
   #ifdef CLOUD_SHADOW
   r*=CloudShadow(i,worldLightVector);
   #endif
   return r*(1.-wetness);
 }
 vec3 c(vec2 v)
 {
   v=(floor(v*ScreenSize)+.5)*ScreenTexel;
   vec4 texLod=texture2DLod(colortex5,v,0);
   vec2 unpackY=UnpackTwo16BitFrom32Bit(texLod.y);
   vec2 unpackZ=UnpackTwo16BitFrom32Bit(texLod.z);
   vec2 unpackW=UnpackTwo16BitFrom32Bit(texLod.w);
   return pow(vec3(unpackY.x,unpackZ.x,unpackW.x),vec3(8.));
 }
 

#include "/program/template/BlockShapes.glsl"


 vec3 w(vec2 v)
 {
   vec2 y=vec2(v.xy*ScreenSize);
   y=(floor(y)+.5)/64.;
   vec3 f=texture2D(noisetex,y).xyz,x=vec3(sqrt(.2),sqrt(2.),1.61803);
   f=mod(f+float(frameCounter%64)*x,vec3(1.));
   return f;
 }
 vec2 Texcoord;
 vec3 e(vec3 v,vec2 y)
 {
   y=y*.999+.001;
   float f=6.28319*y.x,x=sqrt(y.y);
   vec3 m=normalize(vec3(v.y-v.z,-v.x,v.x)),c=cross(v,m),i=(m*cos(f)+c*sin(f))*x+v.xyz*sqrt(1.-y.y);
   return i;
 }
 vec3 h(vec3 v,vec3 y)
 {
   vec2 f=s(v-RAY_TRACING_DIAMETER/2.+1+y+floor(cameraPosition.xyz+.4999)-floor(previousCameraPosition.xyz+.4999));
   return c(f);
 }
 vec3 c(vec3 v,vec3 m,vec3 x,vec3 s,vec3 z,MaterialMask n,float a,out float G,out vec3 q,float g)
 {
   if(n.sky>.5)
   {
     G=0.;
     q=vec3(0.);
     return vec3(0.);
   }
   float o=1.;
   float J=1.;
   if(isEyeInWater<1)
     {
       #ifdef SUNLIGHT_LEAK_FIX
       o=saturate(a*100.);
       #endif
       #ifdef CAVE_GI_LEAK_FIX
       J=saturate(a*10.);
       #endif
     }
   float lightFix=o*J;
   vec3 R=w(Texcoord.xy).xyz;
   q=e(x,R.xy);
   #ifdef GI_SCREEN_SPACE_TRACING
   {
     bool b=false;
     float F=-m.z/256.;
     vec2 M=Texcoord.xy;
     vec3 H=normalize((gbufferModelView*vec4(q.xyz,0.)).xyz);
     float RzTemp=R.z+.5;
     for(int S=0;S<8;S++)
       {
         float k=(float(S)+RzTemp),X=F*k*k;
         vec3 Q=m.xyz+H*X,P=ProjectBack(Q),U=GetViewPositionNoJitter(P.xy,GetDepth(P.xy*.5)).xyz;
         float j=length(Q)-length(U)-.02;
         if(abs(j-0.5)<0.5)
           {
             b=true;
             M=P.xy;
             break;
           }
       }
     if(b)
       {
         vec3 C=pow(texture2DLod(colortex6,M.xy,0).xyz,vec3(2.2));
         return C*100.;
       }
   }
   #endif
   vec3 D=v+x*(.0001*length(v))-z*(g*.4/(saturate(dot(s,-z))+1e-06)+.0008);
   D+=FractedCameraPosition;
   vec3 rayPos=clamp(D+vec3(RAY_TRACING_DIAMETER/2.-1.),vec3(-1.),vec3(RAY_TRACING_DIAMETER-1.));
   vec3 Y=vec3(0.);
   for(int t=0;t<GI_RAY_COUNT;t++)
     {
       vec3 K=q;
       G=10000.;
       if(t>0)
         q=normalize(q+random3(q*frameTimeCounter));
       q=-faceforward(q,q,x);
       Ray P=MakeRay(rayPos,q);
       rXuEJcsNQI T=r(P);
       vec3 M=vec3(1.),y=vec3(0.0);
       float j=0.;
       vec4 U=vec4(0.);
       vec3 stainedColor=vec3(1.);
       vec2 shadowCoord=vec2(0.);
       float prevID=0.;
       for(int u=0;u<DIFFUSE_TRACE_LENGTH;u++)
         {
           shadowCoord=d(T.QbpObHBdUl);
           U=texelFetch(shadowcolor,ivec2(shadowCoord),0);
           j=U.w*255.;
           if((prevID==39.&&j==39.)||(prevID==37.&&j==37.))
             {
               i(T);
               continue;
             }
           if(j<240.||abs(j-248.)<7.)
             {
               if(c(T.QbpObHBdUl,j,P,G,K))
                 {
                   if(abs(j-33.5)<2.)
                     break;
                   vec3 rayPos=fract(P.origin+P.direction*G)-.5;
                   vec2 coordOffset=vec2(0.);
                   coordOffset+=vec2(rayPos.z*-K.x,-rayPos.y)*abs(K.x);
                   coordOffset+=vec2(rayPos.x,rayPos.z*K.y)*abs(K.y);
                   coordOffset+=vec2(rayPos.x*K.z,-rayPos.y)*abs(K.z);
                   vec4 coordData=texelFetch(shadowcolor1,ivec2(shadowCoord),0);
                   float textureResolusion=TEXTURE_RESOLUTION;
                   #ifdef ADAPTIVE_PATH_TRACING_RESOLUTION
                   if(j<67.||abs(j-111.)<29.)
                     textureResolusion=exp2(coordData.w*255.);
                   #endif
                   vec2 terrainSize=textureSize(colortex3,0)/textureResolusion;
                   vec2 coord=(floor(coordData.xy*terrainSize)+.5+coordOffset.xy)/terrainSize;
                   vec4 texColor=texture2DLod(colortex3,coord,0);
                   texColor.xyz=pow(texColor.xyz,vec3(2.2));
                   if(texColor.w<.9&&abs(j-61.5)<31.)
                     {
                       if(j==37.)
                         {
                           texColor.xyz=normalize(texColor.xyz+1e-4)*sqrt(length(texColor.xyz));
                           texColor.xyz=mix(vec3(1.),texColor.xyz,vec3(pow(texColor.w,.2)));
                           texColor.xyz*=texColor.xyz;
                           M*=texColor.xyz;
                           stainedColor*=texColor.xyz;
                         }
                       G=10000.;
                       prevID=j;
                       i(T);
                       continue;
                     }
                   texColor.xyz*=mix(vec3(1.),U.xyz,vec3(coordData.z));
                   M*=texColor.xyz;
                   break;
                 }
             }
           if(j==241.)
             {
               if(u==0)
                 U.xyz*=.5;
               y+=U.xyz*GI_LIGHT_TORCH_INTENSITY;
             }
           prevID=j;
           i(T);
         }
       y*=stainedColor;
       if(j<1.f||j>254.f)
         {
           vec3 I=P.direction;
           if(isEyeInWater==1)
             I=refract(I,vec3(0.,-1.,0.),1.3333);
           vec3 N=SkyShading(I,worldSunVector);
           N*=saturate(I.y*10.+1.);
           N=DoNightEyeAtNight(N*12.,timeMidnight)*.083333;
           vec3 L=N*J,E=L;
           #ifdef CLOUDS_IN_GI
           CloudPlane(L,-P.direction,worldLightVector,worldSunVector,colorSunlight,colorSkyUp,E,timeMidnight,false);
           #endif
           L=TintUnderwaterDepth(L);
           L*=saturate(I.y*5.);
           y+=L*.1*J;
         }
       else
         {
           if(abs(j-31.)<.1)
             y+=.1*M*GI_LIGHT_BLOCK_INTENSITY;
           if(abs(j-36.)<.1)
             {
               float d=saturate(M.x-(M.y+M.z)/1.5);
               y+=.1*M*GI_LIGHT_BLOCK_INTENSITY*step(1e-5,d);
             }
           if(j>=32.&&j<=35.)
             {
               float L=max(-K.z,0.);
               if(abs(j-33.)<.1)
                 L=max(K.x,0.);
               if(abs(j-34.)<.1)
                 L=max(K.z,0.);
               if(abs(j-35.)<.1)
                 L=max(-K.x,0.);
               y+=.1*M*L*vec3(2.,.35,.025)*GI_LIGHT_BLOCK_INTENSITY;
             }
           if(j<240.||abs(j-248.)<7.)
             {
               y+=h(T.QbpObHBdUl,K)*M*2.4;
               if(lightFix>.01)
                 {
                   vec3 I=i(D+P.direction*G-1.,worldLightVector,K),N=DoNightEyeAtNight(I*M*2.4*colorSunlight*lightFix*12.,timeMidnight)/12.;
                   y+=N;
                 }
             }
         }
       Y+=y;
     }
   return Y/GI_RAY_COUNT;
 }
 void main()
 {
   vec4 v=texture2DLod(colortex2,texcoord.xy,0),i=texture2DLod(colortex7,texcoord.xy,0);
   Texcoord=texcoord.xy;
   if(Texcoord.x<HalfScreen.x&&Texcoord.y>HalfScreen.y)
     {
       Texcoord.y-=HalfScreen.y;
       GBufferData m=GetGBufferData(Texcoord.xy);
       MaterialMask x=CalculateMasks(m.materialID,Texcoord.xy);
       vec4 s=GetViewPosition(Texcoord.xy,m.depth),f=gbufferModelViewInverse*vec4(s.xyz,1.),n=gbufferModelViewInverse*vec4(s.xyz,0.);
       vec3 r=normalize(n.xyz),z=normalize((gbufferModelViewInverse*vec4(m.normal,0.)).xyz),e=normalize((gbufferModelViewInverse*vec4(m.geoNormal,0.)).xyz);
       float a;
       vec3 j,I=c(f.xyz,s.xyz,z,e,r,x,m.mcLightmap.y,a,j,m.parallaxOffset);
       v=vec4(j*.5+.5,1.);
       i=vec4(I,saturate(a*.1));
     }
   gl_FragData[0]=texture2DLod(colortex1,texcoord.xy,0);
   gl_FragData[1]=vec4(v);
   gl_FragData[2]=vec4(i);
 }




/* DRAWBUFFERS:127 */
