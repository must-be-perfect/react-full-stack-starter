import normalizeError from '../../utils/normalize-error';

export async function POST({ User }, { body }) {
  try {
    const user = new User(body);

    await user.save();

    return user;
  } catch (error) {
    const normalizedError = normalizeError(error, {
      defaultMessage: 'Signup query handler error',
    });

    throw normalizedError;
  }
}