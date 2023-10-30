
export function imageValidation(value, width) {
  if (value === null)
    return 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=';
  return `https://image.tmdb.org/t/p/w${width}/${value}`;
}