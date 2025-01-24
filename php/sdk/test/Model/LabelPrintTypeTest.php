<?php
/**
 * LabelPrintTypeTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\LabelPrintType;

/**
 * LabelPrintTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates the type of print type for a given label.
 * @package     OpenAPI\Client
 */
class LabelPrintTypeTest extends TestCase
{

    private LabelPrintType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelPrintType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelPrintType"
     */
    public function testLabelPrintType()
    {
        $this->assertInstanceOf(LabelPrintType::class, $this->model);
    }
}
