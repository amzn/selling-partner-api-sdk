<?php
/**
 * PrepInstructionTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\PrepInstruction;

/**
 * PrepInstructionTest Class Doc Comment
 *
 * @category    Class
 * @description Preparation instructions for shipping an item to Amazon&#39;s fulfillment network. For more information about preparing items for shipment to Amazon&#39;s fulfillment network, see the Seller Central Help for your marketplace.
 * @package     OpenAPI\Client
 */
class PrepInstructionTest extends TestCase
{

    private PrepInstruction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrepInstruction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrepInstruction"
     */
    public function testPrepInstruction()
    {
        $this->assertInstanceOf(PrepInstruction::class, $this->model);
    }
}
