export const components = {
  block: {
    // Ex. 1: customizing common block types
    h2: ({ children }: any) => (
      <h1 className="text-2xl text-red-500">{children}</h1>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500">{children}</blockquote>
    ),

    // Ex. 2: rendering custom styles
    customHeading: ({ children }: any) => (
      <h2 className="text-lg text-primary text-purple-700">{children}</h2>
    ),
  },
};
