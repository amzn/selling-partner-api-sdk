<?php
/**
 * InboundEligibilityStatusTest
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
use SpApi\Model\awd\v2024_05_09\InboundEligibilityStatus;

/**
 * InboundEligibilityStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Enum denoting the package inbound eligibility.
 * @package     SpApi
 */
class InboundEligibilityStatusTest extends TestCase
{

    private InboundEligibilityStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundEligibilityStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundEligibilityStatus"
     */
    public function testInboundEligibilityStatus()
    {
        $this->assertInstanceOf(InboundEligibilityStatus::class, $this->model);
    }
}
