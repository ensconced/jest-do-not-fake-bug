function delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

it("this passes", async () => {
  jest.useFakeTimers({
    doNotFake: ["setTimeout"],
  });
  const cb = jest.fn();
  setTimeout(cb, 0);
  await delay(1000);
  expect(cb).toHaveBeenCalled();
});

it("this should also pass, but it fails", async () => {
  jest.useFakeTimers({
    doNotFake: [
      "Date",
      "hrtime",
      "nextTick",
      "performance",
      "queueMicrotask",
      "requestAnimationFrame",
      "cancelAnimationFrame",
      "requestIdleCallback",
      "cancelIdleCallback",
      "setImmediate",
      "clearImmediate",
      "setInterval",
      "clearInterval",
      "setTimeout",
      "clearTimeout",
    ],
  });
  const cb = jest.fn();
  setTimeout(cb, 0);
  await delay(1000);
  expect(cb).toHaveBeenCalled();
});
