export const formatValidationError = errors => {
  console.log(JSON.stringify(errors));
  if (!errors || !errors.issues) return 'validation failed';

  if (Array.isArray(errors.issues))
    return errors.issues.map(i => i.message).join(',');

  return JSON.stringify(errors);
};
