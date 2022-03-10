const files = [
  {
    title: 'Software',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Software',
    source:
      'https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Software',
    source:
      'https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Software',
    source:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Software',
    source:
      'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Software',
    source:
      'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80',
  },
  {
    title: 'Software',
    source:
      'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
];
export function Home() {
  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-lg leading-6 font-semibold text-gray-900">
            Portal
          </h1>
        </div>
      </div>
      <div className="container mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-4 sm:px-0">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {files.map((file, index) => (
              <li key={`portal-image-${index}`} className="relative">
                <div className="w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden">
                  <img
                    src={file.source}
                    alt=""
                    className="object-cover hover:opacity-75 cursor-pointer"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
                  {file.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
