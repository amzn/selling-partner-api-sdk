<?php
/**
 * IneligibilityReasonCodeTest
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
use SpApi\Model\shipping\v2\IneligibilityReasonCode;

/**
 * IneligibilityReasonCodeTest Class Doc Comment
 *
 * @category    Class
 * @description Reasons that make a shipment service offering ineligible.
 * @package     SpApi
 */
class IneligibilityReasonCodeTest extends TestCase
{

    private IneligibilityReasonCode $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new IneligibilityReasonCode();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "IneligibilityReasonCode"
     */
    public function testIneligibilityReasonCode()
    {
        $this->assertInstanceOf(IneligibilityReasonCode::class, $this->model);
    }
}
