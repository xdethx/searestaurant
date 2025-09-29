import PageHeader from "@/components/pageHeader";
import dummyPosts from "@/data/posts";

export default function BlogDetail({ params }) {
  const post = dummyPosts.find((p) => p.slug === params.slug);

  if (!post) return <div className="p-10 text-center">Post not found</div>;

  return (
    <>
 <PageHeader
        title={post.title}
        backgroundImage={post.mainImage}
        extraContent={
          <>
            <p className="uppercase tracking-wide text-orange-400 font-medium">
              {post.tags.join(" & ")}
            </p>
            <p>
              {post.author} &nbsp;•&nbsp; {post.date}
            </p>
          </>
        }
      />

        <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-10 space-y-8">
        <img
          src={post.mainImage}
          alt={post.title}
          className="w-full rounded-md object-cover"
          style={{ height: 500 }}
        />

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
        <p className="text-gray-500">{post.author} • {post.date}</p>
        <p className="text-gray-700 whitespace-pre-line">{post.description}</p>
      </div>
    </section>
    </>

  );
}