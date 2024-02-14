import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  "/master";

const getCourseLists = async () => {
  const query = gql`
    query CourseList {
      courseLists {
        id
        name
        description
        banner {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getCourseById = async (id) => {
  const query = gql`
    query Course {
      courseList(where: { id: "${id}" }) {
        chapter {
          id
          name
          video {
            url
          }
          youtubeUrl
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export { getCourseById, getCourseLists };
