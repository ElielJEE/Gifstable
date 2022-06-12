import { useState } from 'react';

export default function UseLoading() {
  const [loading, setLoading] = useState(false);

  return {loading, setLoading}
}