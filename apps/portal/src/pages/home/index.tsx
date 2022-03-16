import { useAllApplicationQuery } from '@front/generales/shared/gql';
import { Skeleton } from '@mantine/core';

export function Home() {
  const { data, loading } = useAllApplicationQuery();
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
            {loading
              ? [...Array(9)].map((_, index) => (
                  <div key={`skeleton-portal-${index}`}>
                    <Skeleton height={250} mb="md" />
                    <Skeleton height={8} width="30%" />
                  </div>
                ))
              : data?.allApplication?.map((application, index) => (
                  <li key={`portal-image-${index}`} className="relative">
                    <div className="w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden">
                      <img
                        src={application.image}
                        alt=""
                        className="object-cover hover:opacity-75 cursor-pointer"
                      />
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none">
                      {application?.name}
                    </p>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
}
