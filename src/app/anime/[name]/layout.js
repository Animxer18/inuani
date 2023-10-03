export const generateMetadata = async ({ params }) => {
  const anime = params.name;

  const response = await fetch(`https://api.consumet.org/anime/gogoanime/${encodeURIComponent(gogoanime)}`);
  const data = await response.json();

  return {
    title: data.title.romaji,
    description: data.description,
  };
};

  export default function layout({ children }) {
    return <div>{children}</div>;
  }
