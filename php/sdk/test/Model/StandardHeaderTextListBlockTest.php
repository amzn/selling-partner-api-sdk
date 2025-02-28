<?php
/**
 * StandardHeaderTextListBlockTest
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
use SpApi\Model\aplusContent\v2020_11_01\StandardHeaderTextListBlock;

/**
 * StandardHeaderTextListBlockTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ standard fixed-length list of text and a related headline.
 * @package     SpApi
 */
class StandardHeaderTextListBlockTest extends TestCase
{

    private StandardHeaderTextListBlock $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardHeaderTextListBlock();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardHeaderTextListBlock"
     */
    public function testStandardHeaderTextListBlock()
    {
        $this->assertInstanceOf(StandardHeaderTextListBlock::class, $this->model);
    }

    /**
     * Test attribute "headline"
     */
    public function testPropertyHeadline()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\TextComponent();
        
        $this->model->setHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getHeadline());
    }

    /**
     * Test attribute "block"
     */
    public function testPropertyBlock()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardTextListBlock();
        
        $this->model->setBlock($testValue);
        $this->assertEquals($testValue, $this->model->getBlock());
    }
}
