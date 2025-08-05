import { z } from 'zod';

export const checkoutSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(7, { message: 'Phone number is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  zip: z.string().min(4, { message: 'ZIP code is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
  paymentMethod: z.enum(['eMoney', 'cash'], {
    required_error: 'Payment method is required',
  }),
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
