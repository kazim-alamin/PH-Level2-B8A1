const multiplyValue = (value: number, multiplier?: number) => {
  if (multiplier === undefined) {
    return value * 2;
  }

  const result = value * multiplier;

  return result === 0 ? 0 : result;
};

type InputValue = string | number | boolean;
const processInput = (value: InputValue): string | number => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  }

  if (typeof value === "number") {
    return value * 10;
  }

  return value ? "Active" : "Inactive";
};

type Coordinate = readonly [
  latitude: number,
  longitude: number,
  locationName: string,
];

const formatCoordinate = (coordinate: Coordinate): string => {
  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const resultArray: T[] = [];

  for (const array of arrays) {
    for (const item of array) {
      resultArray.push(item);
    }
  }

  return resultArray;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const popularCourses = courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );

  return popularCourses;
};
