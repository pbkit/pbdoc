/** @jsx h */
import { h } from 'preact';
import { PageProps } from '$fresh/server.ts';
import { tw } from '@twind';

export default function Greet(props: PageProps) {
  return (
    <div class={tw`h-full bg-black`}>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <p class={tw`my-6`}>pbdoc: Protocol buffers documentation generator</p>
        <p class={tw`my-6`}>Hello {props.params.typePath}</p>
      </div>
    </div>
  );
}
