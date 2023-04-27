// Created by: Dominic M.
// Created on: April 2023
//
// This program calculates volume of a sphere.
package main

import (
	"fmt"
	"math"
)

func main() {
	var radius float64
	var volume float64


	// input
	fmt.Println("This program calculates volume of a sphere.")
	fmt.Println()
	fmt.Print("Enter a radius: ")
	fmt.Scanln(&radius)

	// process
	volume = math.Pi * math.Pow(radius, 3) * (4.0 / 3.0)

	// output
	fmt.Println()
	volumeFormatted := fmt.Sprintf("%.2f", volume)
	fmt.Println("The volume is:", volumeFormatted, "mm³")

	fmt.Println("\nDone.")
}
