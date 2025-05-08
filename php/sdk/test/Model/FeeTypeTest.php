<?php
/**
 * FeeTypeTest
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
use SpApi\Model\sellerWallet\v2024_03_01\FeeType;

/**
 * FeeTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of fee on the transaction.
 * @package     SpApi
 */
class FeeTypeTest extends TestCase
{

    private FeeType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeeType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeeType"
     */
    public function testFeeType()
    {
        $this->assertInstanceOf(FeeType::class, $this->model);
    }
}
