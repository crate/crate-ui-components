export * from "./renderWithTestWrapper";

// this prevents ant design forms async warnings
// appearing in the console during tests
(global as any).ASYNC_VALIDATOR_NO_WARNING = 1;
