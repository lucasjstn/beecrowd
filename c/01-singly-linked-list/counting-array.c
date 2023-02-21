#include <stdio.h>

int main() {
	int arr[] = {45, 8, 3};

	int n, i;

	n = sizeof(arr)/sizeof(int);
	for(int i = 0; i<n; i++) 
		printf("%d ", arr[i]);
	
	return 0;
}
