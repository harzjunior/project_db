import Link from "next/link";
import React from "react";
import { ActionButton } from "./ActionButton";

export function WelcomeSection() {
  return (
    <div className="col-md-5 order-md-last wrap-about py-5 wrap-about bg-light">
      <div className="text px-4 ftco-animate">
        <h2 className="mb-4">Welcome to ByteBuddiez Learning School</h2>
        <p>
          At ByteBuddiez, we're not just a STEM company; we're a hub of
          excitement where technology meets friendship in the most delightful
          way! Imagine a world where learning to code is as fun as cuddling up
          with a good story.
        </p>
        <p>
          ByteBuddiez is your child's gateway to the wonders of STEM, where each
          line of code is an adventure waiting to unfold. Our commitment is to
          create an interactive space that not only nurtures tech-savvy skills
          but also fosters friendships and a love for learning. We're more than
          just coding – we're ByteBuddiez, where knowledge is a cuddle away!.
        </p>
        <ActionButton
          href="/about"
          title="Welcome to ByteBuddiez Learning School"
          label="Read More"
          padClass="true"
        />
      </div>
    </div>
  );
}
