import { redirect } from 'next/navigation';

export default function NewsIndexRedirect() {
  redirect('/news/1');
}