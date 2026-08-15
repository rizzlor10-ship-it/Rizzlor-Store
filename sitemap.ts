import {MetadataRoute} from "next";
import {supabaseServer} from "@/lib/server";
export default async function sitemap():Promise<MetadataRoute.Sitemap>{
 const base=process.env.NEXT_PUBLIC_SITE_URL||"https://your-domain.com";
 const {data}=await supabaseServer().from("products").select("slug,created_at").eq("is_published",true);
 return [
  {url:base,lastModified:new Date(),changeFrequency:"daily",priority:1},
  {url:`${base}/products`,lastModified:new Date(),changeFrequency:"daily",priority:.9},
  ...(data||[]).map(p=>({url:`${base}/products/${p.slug}`,lastModified:p.created_at?new Date(p.created_at):new Date(),changeFrequency:"weekly" as const,priority:.8}))
 ];
}