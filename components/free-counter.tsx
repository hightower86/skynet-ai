import { FC, useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Progress } from '@/components/ui/progress';

import { MAX_FREE_COUNTS } from '@/constants';
import { Button } from './ui/button';
import { Zap } from 'lucide-react';

interface FreeCounterProps {
    apiLimitCount: number;
}

const FreeCounter: FC<FreeCounterProps> = ({ apiLimitCount = 0 }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="px-3">
            <Card className="bg-white/10 border-0">
                <CardContent className="py-4">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p className="text-sm text-gray-400">
                            {apiLimitCount} / {MAX_FREE_COUNTS} Free Genetations
                        </p>
                        <Progress
                            value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
                        />
                        <Button variant="premium">
                            Upgrade
                            <Zap className="w-4 h-4 ml-2 fill-white" />
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default FreeCounter;
