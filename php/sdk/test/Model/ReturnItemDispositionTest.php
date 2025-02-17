<?php
/**
 * ReturnItemDispositionTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\ReturnItemDisposition;

/**
 * ReturnItemDispositionTest Class Doc Comment
 *
 * @category    Class
 * @description The condition of the return item when received by an Amazon fulfillment center.
 * @package     SpApi
 */
class ReturnItemDispositionTest extends TestCase
{

    private ReturnItemDisposition $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReturnItemDisposition();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReturnItemDisposition"
     */
    public function testReturnItemDisposition()
    {
        $this->assertInstanceOf(ReturnItemDisposition::class, $this->model);
    }
}
