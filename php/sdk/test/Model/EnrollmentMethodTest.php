<?php
/**
 * EnrollmentMethodTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\replenishment\v2022_11_07\EnrollmentMethod;

/**
 * EnrollmentMethodTest Class Doc Comment
 *
 * @category    Class
 * @description The enrollment method used to enroll the offer into the program.
 * @package     SpApi
 */
class EnrollmentMethodTest extends TestCase
{

    private EnrollmentMethod $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new EnrollmentMethod();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "EnrollmentMethod"
     */
    public function testEnrollmentMethod()
    {
        $this->assertInstanceOf(EnrollmentMethod::class, $this->model);
    }
}
