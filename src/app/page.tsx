function Item({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[500px] border rounded-lg p-10 bg-white">{children}</div>
  );
}

function GrowItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="grow w-[500px] border rounded-lg p-10 bg-white">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-dvw h-dvh bg-orange-200 grid place-items-center">
      <div className="w-full bg-gray-300 p-4 rounded-lg">
        <h1>flex grow 確認</h1>
        <div className="w-full flex gap-4">
          <Item>
            <span>itemA</span>
          </Item>
          <GrowItem>
            <span>itemA</span>
          </GrowItem>
        </div>
      </div>
      <div className="w-full bg-gray-300 p-4 rounded-lg">
        <h1>flex shrink 確認</h1>
        <div className="flex gap-4 bg-blue-400">
          {/* <div className="shrink-0 w-full p-4 border rounded-lg bg-white">
            <span>shrink-0</span>
          </div> */}
          <div className="shrink-1 w-full p-4 border rounded-lg bg-white">
            <span>shrink-1</span>
          </div>
          <div className="shrink-2 w-full p-4 border rounded-lg bg-white">
            <span>shrink-2</span>
          </div>
          <div className="shrink-3 w-full p-4 border rounded-lg bg-white">
            <span>shrink-3</span>
          </div>
          <div className="shrink-3 w-full p-4 border rounded-lg bg-white">
            <span>shrink-3</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-300 p-4 rounded-lg">
        <h1>flex-n 確認</h1>
        <div className="flex gap-4 bg-blue-400">
          {/* <div className="shrink-0 w-full p-4 border rounded-lg bg-white">
            <span>shrink-0</span>
          </div> */}
          <div className="flex-1 w-full p-4 border rounded-lg bg-white">
            <span>shrink-1</span>
          </div>
          <div className="flex-2 w-full p-4 border rounded-lg bg-white">
            <span>shrink-2</span>
          </div>
          <div className="flex-3 w-full p-4 border rounded-lg bg-white">
            <span>shrink-3</span>
          </div>
          <div className="flex-4 w-full p-4 border rounded-lg bg-white">
            <span>shrink-4</span>
          </div>
        </div>
      </div>
    </div>
  );
}
