<?php
/**
 * ErrorReasonTest
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
use SpApi\Model\fulfillment\inbound\v0\ErrorReason;

/**
 * ErrorReasonTest Class Doc Comment
 *
 * @category    Class
 * @description The reason that the ASIN is invalid.
 * @package     SpApi
 */
class ErrorReasonTest extends TestCase
{

    private ErrorReason $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ErrorReason();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ErrorReason"
     */
    public function testErrorReason()
    {
        $this->assertInstanceOf(ErrorReason::class, $this->model);
    }
}
