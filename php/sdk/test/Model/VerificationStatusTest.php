<?php
/**
 * VerificationStatusTest
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
use SpApi\Model\orders\v0\VerificationStatus;

/**
 * VerificationStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The verification status of the order.
 * @package     SpApi
 */
class VerificationStatusTest extends TestCase
{

    private VerificationStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new VerificationStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "VerificationStatus"
     */
    public function testVerificationStatus()
    {
        $this->assertInstanceOf(VerificationStatus::class, $this->model);
    }
}
