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

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

// Problem 7
class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}