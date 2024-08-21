#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Function to check if a command exists
command_exists () {
    command -v "$1" &> /dev/null ;
}

# Step 1: Install Fluvio CLI if not already installed
if command_exists fluvio ; then
    echo "Fluvio CLI is already installed."
else
    echo "Installing Fluvio CLI..."
    curl -fsSL https://packages.fluvio.io/v1/install.sh | bash
    # Add Fluvio to PATH
    export PATH="$HOME/.fluvio/bin:$PATH"
fi

# Step 2: Start the Fluvio local cluster
echo "Starting Fluvio local cluster..."
fluvio cluster start --local

# Step 3: Create a topic named "message"
echo "Creating topic 'message'..."
fluvio topic create message

# Confirm the topic creation
echo "Verifying topic creation..."
fluvio topic list | grep message && echo "Topic 'message' successfully created." || echo "Failed to create topic 'message'."

echo "Fluvio local server setup with topic 'message' is complete."
