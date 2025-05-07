import Image from 'next/image';
import Link from 'next/link';

export const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <figure className="my-6">
        <Image
          src={value?.asset?.url}
          alt={value?.alt || ''}
          width={1000}
          height={800}
          className="object-contain mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto"
        />
        {value?.caption && (
          <figcaption className="text-center text-sm mt-2 text-gray-600">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),

    marks: {
      link: ({ value, children }) => {
        if (!value?.href) return <span>{children}</span>;
        
        const isInternal = value.href.startsWith('/') || value.href.startsWith('#');
        
        if (isInternal) {
          return (
            <Link href={value.href} passHref legacyBehavior>
              <a className="text-blue-600 hover:underline">
                {children}
              </a>
            </Link>
          );
        }
    
        return (
          <a
            href={value.href}
            target={value.openInNewTab ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {children}
            {value.openInNewTab && <span aria-hidden="true"> ↗</span>}
          </a>
        );
      }
    },
    
    postReference: ({ value }) => {
      if (!value?.slug || !value?.title) return null;

      return (
        <div className="my-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
          <Link href={`/${value.slug.current}`}>
            <span className="text-blue-600 hover:underline font-medium">
              See Also: {value.title}
            </span>
          </Link>
        </div>
      );
    },

    deviceReference: ({ value }) => {
      if (!value?.slug || !value?.name) return null;

      return (
        <div className="my-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <Link href={`/${value.slug.current}`}>
            <span className="text-gray-700 hover:underline font-medium">
              Device: {value.name}
            </span>
          </Link>
        </div>
      );
    },
  },

  block: {
    normal: ({ children }) => <p className="my-4 dark:text-gray-300 leading-relaxed">{children}</p>,
    h1: ({ children }) => <h1 className="text-4xl font-bold my-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold my-6">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold my-5">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold my-4">{children}</h4>,
    h5: ({ children }) => <h5 className="text-lg font-medium my-3">{children}</h5>,
    h6: ({ children }) => <h6 className="text-base font-medium my-3">{children}</h6>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-600">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
  },

  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
};




  
  