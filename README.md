# React useEffect Cleanup Function Not Always Called on Unmount

This repository demonstrates a subtle bug in React where the cleanup function within a `useEffect` hook might not always be called when a component is unmounted, especially if it's unmounted rapidly or before the cleanup function has a chance to execute.  The bug is particularly noticeable when dealing with asynchronous operations or frequent state changes.

## Problem Description:

The `useEffect` hook's cleanup function is crucial for tasks like canceling network requests, clearing timers, or detaching event listeners when the component is no longer needed.  If it isn't called, resources might leak or unexpected behavior could result.  This example highlights a scenario where the cleanup function might be skipped under certain conditions.

## Solution:

The provided solution shows a modification to the original code to increase the reliability of the cleanup function's execution.  While there's no perfect guarantee in all edge cases, it significantly improves the chances of the cleanup function being called consistently.
