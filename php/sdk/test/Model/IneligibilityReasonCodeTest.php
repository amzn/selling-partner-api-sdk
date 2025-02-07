<?php
/**
 * IneligibilityReasonCodeTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\shipping\v2\IneligibilityReasonCode;

/**
 * IneligibilityReasonCodeTest Class Doc Comment
 *
 * @category    Class
 * @description Reasons that make a shipment service offering ineligible.
 * @package     OpenAPI\Client
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
