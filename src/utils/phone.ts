export const getPhoneHref = (phone: string) => `tel:${phone.replace(/\s/g, '')}`;
