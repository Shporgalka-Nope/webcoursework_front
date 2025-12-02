import { useEffect, useState } from "react";

interface Props {
  userId: string;
  partnerId?: string;
}

export default function MessageWindowHeader({ userId, partnerId = "" }: Props) {
  const [localUserId, setLocalUserId] = useState<string>();

  useEffect(() => {
    setLocalUserId(userId);
  }, [userId]);
  return <p className="text-center text-black">{localUserId} =&gt; 123</p>;
}
