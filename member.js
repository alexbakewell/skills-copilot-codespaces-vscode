function skillsMember() {
  return new Promise(async (resolve, reject) => {
    try {
      const skills = await getSkills();
      resolve(skills);
    } catch (error) {
      reject(error);
    }
  });
}