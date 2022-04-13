import { BIRTH_SPLITTER } from "@/constants/application";
const DATE_REG_EXP = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;

export const getBirth = (birth: string) => {
  let result = { birth: "", age: -1 };
  if (DATE_REG_EXP.test(birth)) {
    const dateArray = birth.split("-");
    // set birth day
    result.birth = dateArray.join(BIRTH_SPLITTER);
    // set age
    const [year, month, date] = dateArray;
    const birthDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(date)
    );
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    // compare month and date
    birthDate.setFullYear(now.getFullYear());
    if (now.getTime() < birthDate.getTime()) age--;
    // set age
    result.age = age;
  }
  return result;
};
