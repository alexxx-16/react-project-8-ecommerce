const SignUpForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center p-6 rounded-xl text-xl gap-4 bg-white"
    >
      <h1 className="text-center text-2xl text-mauve-800">Sign Up Form</h1>
      <input
        type="email"
        placeholder="Email"
        className="outline-none border-b-2 border-white placeholder-mauve-500 font-light bg-transparent"
      />
      <input
        type="password"
        placeholder="Password"
        className="outline-none border-b-2 border-white placeholder-mauve-500 font-light"
      />
      <button
        type="submit"
        className="bg-pink-300 py-2 px-3 w-fit rounded-lg active:scale-95 transition-all duration-200"
      >
        Create Account
      </button>
    </form>
  );
};

export default SignUpForm;
