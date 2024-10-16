import { getBlogPosts } from "@/components/mdx/utils";
import PageIllustration from "@/components/page-illustration";
import PostItem from "@/components/post-item";

export const metadata = {
  title: "Blog - Simple",
  description: "Page description",
};

export default function Blog() {
  const allBlogs = getBlogPosts();

  // Sort posts by date
  allBlogs.sort((a, b) => {
    return new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? -1
      : 1;
  });

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-16">
            <h1 className="mb-4 text-5xl font-bold">Blog</h1>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor siamet enet
            </p>
          </div>
          <div className="mb-10 flex flex-wrap gap-2">
            <button className="btn-sm bg-gray-800 font-normal text-gray-200 shadow hover:bg-gray-900">
              All
            </button>
            <button className="btn-sm bg-white font-normal text-gray-800 shadow hover:bg-gray-50">
              Interviews
            </button>
            <button className="btn-sm bg-white font-normal text-gray-800 shadow hover:bg-gray-50">
              Inspiration
            </button>
            <button className="btn-sm bg-white font-normal text-gray-800 shadow hover:bg-gray-50">
              Updates
            </button>
            <button className="btn-sm bg-white font-normal text-gray-800 shadow hover:bg-gray-50">
              Product
            </button>
            <button className="btn-sm bg-white font-normal text-gray-800 shadow hover:bg-gray-50">
              Miscellaneous
            </button>
          </div>

          <div className="space-y-10 border-l [border-image:linear-gradient(to_bottom,theme(colors.slate.200),theme(colors.slate.300),transparent)1]">
            {allBlogs.map((post, postIndex) => (
              <PostItem key={postIndex} {...post} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="btn-sm min-w-[220px] bg-gray-800 py-1.5 text-gray-200 shadow hover:bg-gray-900">
              Load more{" "}
              <span className="ml-2 tracking-normal text-gray-500">↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
