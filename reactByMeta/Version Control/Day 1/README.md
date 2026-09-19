# 🐧 Linux Commands & I/O Redirection — Notes

Quick-reference notes on essential Linux/Bash commands, piping, and the three standard I/O streams (stdin, stdout, stderr).

---

## 📂 File & Directory Basics

| Command | Description |
|---|---|
| `cd <directory>` | Change directory |
| `cd ..` | Go back one level |
| `pwd` | Show path of current working directory |
| `mkdir <folder-name>` | Create a new folder |
| `touch <file-name>` | Create a new empty file |
| `code <file-name>` | Open a file in VS Code |
| `cp` | Copy a file |
| `mv <source> <destination>` | Move/rename a file |
| `ls` | List files in current directory |
| `ls -l` | List with read/write permission info |
| `ls -a` | List all files, including hidden ones |

---

## 🔁 Redirection — The Three Standard Streams

Linux treats every command's input/output as a **stream** that can be redirected to/from files.

### 1️⃣ Standard Input (`stdin`)
```bash
cat > input.txt
# <type your text, then Ctrl+D to save>
```

### 2️⃣ Standard Output (`stdout`)
```bash
cat < input.txt        # Print contents of input.txt to terminal
ls -l > output.txt     # Save output of ls -l into output.txt
less output.txt        # View the saved output
```

### 3️⃣ Standard Error (`stderr`)
```bash
<command> 2> error.txt   # Redirect error messages to a file
less error.txt           # View the captured error
```

| Symbol | Stream | Meaning |
|---|---|---|
| `<` | stdin | Feed input from a file |
| `>` | stdout | Send output to a file (overwrite) |
| `2>` | stderr | Send error messages to a file |

---

## 🧰 Useful Utilities

| Command | Description |
|---|---|
| `cat <file>` | Show contents of a file |
| `wc <file>` | Word/line/char count of a file |
| `wc -w <file>` | Word count only |
| `grep <text> <file>` | Search for text in a file |
| `grep -i` | Case-insensitive search |
| `grep -w` | Match the exact word |

---

## 🔗 Piping (`|`)

Pipes pass the output of one command as input to the next.

```bash
ls | wc -w                          # Number of files in current directory
cat file.txt | wc -w                # Word count of a single file
cat file1.txt file2.txt | wc -w     # Combined word count of two files
ls <directory> | grep <text>        # Filter directory listing by text match
```

---

## 📜 Writing a Bash Script

```bash
vim testshell.sh        # Create the script file
# Press "i" to enter insert mode

#!/bin/bash              # Shebang — tells OS it's a bash script
echo "Hello World"

# Press "esc", then type:
:wq!                      # Save and quit
```

Make it executable and run it:
```bash
chmod 755 testshell.sh    # Grant execute permission
./testshell.sh            # Run the script
```

---

## 📌 Course Progress
🟢 **Topic:** Linux Shell Basics — Commands, I/O Redirection & Piping
🗂️ **Part of:** Self-study / Web Dev foundations
✅ Status: Notes complete