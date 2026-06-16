import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export default function VideoModal({ isOpen, onClose }: Props) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden bg-black border border-white/10"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 bg-black/40 hover:bg-black/85 text-white p-2 rounded-full border border-white/20 z-10"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <iframe
                            className="w-full h-full border-none"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}