initSidebarItems({"enum":[["Order","Enum to specify how a matrix is arranged. Required for the `cblas_*` functions."],["Transpose","Enum to specify how to transform a matrix before doing an operation on it. Required for the `cblas_*` functions."]],"fn":[["cblas_daxpy","Computes `alpha * x + y` where `alpha` is a f64 scalar and `x` and `y` are vectors of f64."],["cblas_dgemm","Computes `alpha * op(A) * op(B) + beta * C` where `alpha` and `beta` are f64 scalars, `A`, `B`, `C` are a matrices of f64 values and `op(X)` is either `op(X) = X` or `op(X) = X^T` (the transpose or conjugate transpose of the matrix `X`)."],["cblas_dnrm2","Computes the L2 norm of a vector of f64 (doubles)."],["cblas_saxpy","Computes `alpha * x + y` where `alpha` is a f64 scalar and `x` and `y` are vectors of f32."],["cblas_sgemm","Computes `alpha * op(A) * op(B) + beta * C` where `alpha` and `beta` are f32 scalars, `A`, `B`, `C` are a matrices of f32 values and `op(X)` is either `op(X) = X` or `op(X) = X^T` (the transpose or conjugate transpose of the matrix `X`)."],["cblas_snrm2","Computes the L2 norm of a vector of f32 (floats)."]]});