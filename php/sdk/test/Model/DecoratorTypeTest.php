<?php
/**
 * DecoratorTypeTest
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
use SpApi\Model\aplusContent\v2020_11_01\DecoratorType;

/**
 * DecoratorTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of rich text decorator.
 * @package     SpApi
 */
class DecoratorTypeTest extends TestCase
{

    private DecoratorType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DecoratorType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DecoratorType"
     */
    public function testDecoratorType()
    {
        $this->assertInstanceOf(DecoratorType::class, $this->model);
    }
}
