/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';

export default function Home() {
  return (
    <div class={tw`h-full bg-black`}>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <p class={tw`my-6`}>pbdoc: Protocol buffers documentation generator</p>
        <p class={tw`my-6 text-blue-400`}>
          <a href="/message/.type.path">message: .type.path</a>
        </p>
      </div>
    </div>
  );
}
