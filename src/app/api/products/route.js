import useSWR from 'swr';
import Image from 'next/image';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductCarousel({ title, endpoint }) {
  const { data, error } = useSWR(endpoint, fetcher);

  if (error) return <p>Failed to load products.</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h2>{title}</h2>
      <div className="flex gap-4 overflow-x-auto">
        {data.map(product => (
          <div key={product.id} className="w-64 flex-shrink-0">
            <Image
              src={product.image.src}
              alt={product.name}
              width={product.image.width}
              height={product.image.height}
              className="object-cover rounded-lg"
            />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
