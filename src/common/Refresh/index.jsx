"use client";
import { motion, AnimatePresence } from "framer-motion";

export const RefreshTitle = ({ children }) => (
    <>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, z: 25 }}
                animate={{ opacity: 1, z: 0 }}
                exist={{ opacity: 0, z: 25 }}
                transition={{ delay: 3 }}
            >{children}
            </motion.div>
        </AnimatePresence>
    </>
)

export const RefreshHeader = ({ children }) => (
    <>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, z: 25 }}
                animate={{ opacity: 1, z: 0 }}
                exist={{ opacity: 0, z: 25 }}
                transition={{ delay: 0.50 }}
            >{children}
            </motion.div>
        </AnimatePresence>
    </>
)

export const RefreshLine = ({ children }) => (
    <>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, z: 25 }}
                animate={{ opacity: 1, z: 0 }}
                exist={{ opacity: 0, z: 25 }}
                transition={{ delay: 0.70 }}
            >{children}
            </motion.div>
        </AnimatePresence>
    </>
)

export const RefreshDetails = ({ children }) => (
    <>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, z: 25 }}
                animate={{ opacity: 1, z: 0 }}
                exist={{ opacity: 0, z: 25 }}
                transition={{ delay: 0.9 }}
            >{children}
            </motion.div>
        </AnimatePresence>
    </>
)

export const RefreshLineTwo = ({ children }) => (
    <>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, z: 25 }}
                animate={{ opacity: 1, z: 0 }}
                exist={{ opacity: 0, z: 25 }}
                transition={{ delay: 1.1 }}
            >{children}
            </motion.div>
        </AnimatePresence>
    </>
)





