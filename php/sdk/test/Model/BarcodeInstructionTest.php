<?php
/**
 * BarcodeInstructionTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\BarcodeInstruction;

/**
 * BarcodeInstructionTest Class Doc Comment
 *
 * @category    Class
 * @description Labeling requirements for the item. For more information about FBA labeling requirements, see the Seller Central Help for your marketplace.
 * @package     OpenAPI\Client
 */
class BarcodeInstructionTest extends TestCase
{

    private BarcodeInstruction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BarcodeInstruction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BarcodeInstruction"
     */
    public function testBarcodeInstruction()
    {
        $this->assertInstanceOf(BarcodeInstruction::class, $this->model);
    }
}
