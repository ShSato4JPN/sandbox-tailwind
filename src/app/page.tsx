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
  );
}
